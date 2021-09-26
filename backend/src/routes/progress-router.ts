import { Express } from 'express';
import ProgressController from '../controllers/progress';
// use checkToken when auth needed
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { checkToken } from '../middleware/auth';

export const ProgressRoute = (app: Express, controller: ProgressController) => {
  /**
     * @swagger
     * /progress:
     *  put:
     *   description: Create or Updates a progress
     *   tags: [Progress]
     *   requestBody:
     *    required: true,
     *    content:
     *     application/json:
     *      schema:
     *       type: object
     *       properties:
     *        data:
     *         type: Object
     *         example: {"data": "data"}
     *        userId:
     *         type: string
     *         example: John
     *        taskId:
     *         type: string
     *         example: Task
     *        courseId:
     *         type: string
     *         example: Course
     *        completed:
     *         type: Boolean
     *         example: True
     *        score:
     *         type: Number
     *         example: 22
     *
     *   responses:
     *    200:
     *     description: Success
     */
  app.put('/progress', controller.put);

  /**
     * @swagger
     * /progress:
     *  get:
     *   description: Get a progress by userId, taskId, courseId or all of them
     *   tags: [Progress]
     *   parameters:
     *    - in: query
     *      name: userId
     *      required: false
     *      type: string
     *    - in: query
     *      name: taskId
     *      required: false
     *      type: string
     *    - in: query
     *      name: courseId
     *      required: false
     *      type: string
     *   responses:
     *    200:
     *     description: Success
     */
  app.get('/progress', controller.searchProgress);

  /**
     * @swagger
     * /progress/statistics:
     *  get:
     *   description: Get a progress by userId, taskId, courseId or all of them
     *   tags: [Progress]
     *   parameters:
     *    - in: query
     *      name: userId
     *      required: false
     *      type: string
     *    - in: query
     *      name: taskId
     *      required: false
     *      type: string
     *    - in: query
     *      name: courseId
     *      required: false
     *      type: string
     *   responses:
     *    200:
     *     description: Success
     */
  app.get('/progress/statistics', controller.userCourseStatistics);

  /**
     * @swagger
     * /progress/tracking:
     *  put:
     *   description: Put tracking logs on a progress by userId, taskId and courseId
     *   tags: [Progress]
     *   parameters:
     *    - in: query
     *      name: userId
     *      required: false
     *      type: string
     *    - in: query
     *      name: taskId
     *      required: false
     *      type: string
     *    - in: query
     *      name: courseId
     *      required: false
     *      type: string
     *   requestBody:
     *    required: true
     *    content:
     *     application/json:
     *      schema:
     *       type: object
     *       properties:
     *        date:
     *         type: Date
     *         example: 2021-09-12T14:05:47.823Z
     *        event:
     *         type: string
     *         example: FRIDGE
     *        value:
     *         type: string
     *         example: OPEN
     *        data:
     *         type: Object
     *         example: {"data": "data"}
     *   responses:
     *    200:
     *     description: Success
     */
  app.put('/progress/tracking', controller.putTracking);

  /**
     * @swagger
     * /progress/tracking/logs:
     *  get:
     *   description: Get tracking logs on a progress for a userId and courseId
     *   tags: [Progress]
     *   parameters:
     *    - in: query
     *      name: userId
     *      required: false
     *      type: string
     *    - in: query
     *      name: courseId
     *      required: false
     *      type: string
     *   responses:
     *    200:
     *     description: Success
     */
  app.get('/progress/tracking/logs', controller.getTrackingLogs);
};
