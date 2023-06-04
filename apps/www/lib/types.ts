/**
 * Take a type T and convert its properties to Vue props to ensure none has been left out.
 */
export type VueProps<T> = {
    [K in keyof T]: {
      type: PropType<T[K]>
      default?: T[K]
      required?: boolean
    }
  }