using System;
using TMPro;
using UnityEngine;
using Valve.VR.InteractionSystem;
using VRKeys;


public class XRKeyboardManager : MonoBehaviour
{
    [SerializeField] private Keyboard keyboard;
    [SerializeField] private float targetY;
    [SerializeField] private float targetDistance;

    private Vector3 originalKeyboardPos = Vector3.zero;
    
    public static XRKeyboardManager Instance { get; private set; }

    public Keyboard.KeyboardSubmitEvent OnKeyboardSubmit => keyboard.OnSubmit;

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(this);
            return;
        }
        
        Instance = this;

        keyboard.transform.position = originalKeyboardPos;
    }

    private void Start()
    {
        // keyboard.playerSpace = Player.instance.hmdTransform.gameObject;
    }

    public void TargetText(TMP_Text text)
    {
        keyboard.targetText = text;
    }

    public void EnableKeyboard()
    {
        keyboard.Enable();

        Vector3 forwardVector = Player.instance.bodyDirectionGuess.normalized;
        Quaternion forwardRotation = Quaternion.LookRotation(forwardVector, Vector3.up);

        Vector3 playerPos = Player.instance.hmdTransform.position;
        playerPos.y = targetY;

        keyboard.transform.rotation = forwardRotation;
        keyboard.transform.position = playerPos + forwardVector * (1 + targetDistance);
    }

    public void DisableKeyboard()
    {
        keyboard.Disable();
        keyboard.targetText = null;
        keyboard.transform.position = originalKeyboardPos;
    }
}