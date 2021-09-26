import mongoose, { Document } from 'mongoose';
import _ from 'underscore';
import config from './helpers/config';

// Seed data
import EmployeesData from './seed-data/employees.json';
import SupervisorsData from './seed-data/supervisors.json';
import RecipesData from './seed-data/recipes.json';
import TasksData from './seed-data/tasks.json';
import CoursesData from './seed-data/courses.json';
import ImagesData from './seed-data/images.json';
import ProgressesData from './seed-data/progress.json';
import TrackingData from './seed-data/tracking.json';

// Mongo models
import User from './model/user';
import Recipe from './model/recipe';
import Task from './model/task';
import Course from './model/course';
import ProfileImage from './model/image';
import Progress from './model/progress';

async function save(models: Document[][]) {
  await Promise.all(models.map(async (model) => Promise.all(model.map(async (obj) => obj.save()))));
}

async function wipe() {
  await User.deleteMany({});
  await Course.deleteMany({});
  await Task.deleteMany({});
  await Recipe.deleteMany({});
  await ProfileImage.deleteMany({});
  await Progress.deleteMany({});
}

async function seed() {
  try {
    const Employees: Document[] = await EmployeesData.map((data) => new User(data));
    const Supervisors: Document[] = await SupervisorsData.map((data) => new User(data));
    const Recipes: Document[] = await RecipesData.map((data) => new Recipe(data));
    const Tasks: Document[] = await TasksData.map((data) => new Task({ ...data, recipe: Recipes[data.recipe] }));
    const Courses: Document[] = await (CoursesData as any[]).map((data) => new Course({
      ...data,
      tasks: data.tasks.map((i: number) => Tasks[i]),
      assignedEmployees: data.assignedEmployees.map((i: number) => Employees[i]),
    }));
    const Images: Document[] = await ImagesData.map((data) => new ProfileImage(data));
    const Progresses: Document[] = await (ProgressesData as any[]).map((data) => new Progress({
      ...data,
      userId: Employees[CoursesData[data.courseId].assignedEmployees[data.userId]],
      taskId: Tasks[CoursesData[data.courseId].tasks[data.taskId]],
      courseId: Courses[data.courseId],
    }));

    const len = TrackingData.length;
    Progresses.map((progress: any) => {
      progress.tracking = _.sample(TrackingData, len * 0.8);
    });

    await save([Employees, Supervisors, Recipes, Tasks, Courses, Progresses, Images]);
    console.log('Done seeding');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Error ${e}`);
  }
}

async function main() {
  const mongoUri = `${config.DATABASE_URL}/${config.DATABASE_NAME}` as string;
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
    if (err) {
      throw err;
    } else {
      // eslint-disable-next-line no-console
      console.log(`Successfully connected to ${config.DATABASE_NAME}`);
    }
  });

  await wipe();
  await seed();

  mongoose.disconnect();
}

main();
