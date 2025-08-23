import { useState } from "react";

// JP comment: <T extends { [key: string]: boolean> states that T is of a type with a string key and boolean value.
/**
 * A custom React hook to manage toggle states for multiple buttons or boolean flags.
 *
 * This hook is generic and can handle any number of keys, each representing a boolean
 * state. It provides a simple way to toggle individual flags while keeping the other
 * states unchanged.
 *
 * @template T - An object type where each key is a string and its value is a boolean.
 *
 * @param initialState - The initial state object where keys are button names and values are booleans.
 *
 * @returns An object containing:
 * - `toggledButtons`: The current state object with all boolean flags.
 * - `toggledButton`: A function to toggle a specific flag by key.
 *
 * @example
 * ```ts
 * const { toggledButtons, toggledButton } = useToggleButtons({
 *   addButton: false,
 *   favoriteButton: true,
 * });
 *
 * // toggledButtons.addButton => false
 * toggledButton("addButton");
 * // toggledButtons.addButton => true
 * ```
 *
 * @example
 * ```tsx
 * <Button
 *   onClick={() => toggledButton("favoriteButton")}
 *   isFilled={toggledButtons.favoriteButton}
 * />
 * ```
 */
export function useToggleButtons<T extends { [key: string]: boolean }>(
  initialState: T
) {
  const [toggledButtons, setToggledButtons] = useState<T>(initialState);

  function toggledButton(button: keyof T): void {
    setToggledButtons((prev) => ({
      ...prev, // JP comment: allow other unchanged values of the object to keep their values.
      [button]: !prev[button], // JP comment: this line says Key=button: Value=![button]
    }));
  }

  return { toggledButtons, toggledButton };
}
