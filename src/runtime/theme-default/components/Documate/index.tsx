// import { DocumateDialog as Dialog } from './dialog'
// import { Button } from './button'

// export { Dialog, Button as Documate }
// export default Button
import React, { useState } from 'react'
import { DocumateDialog as Dialog } from './dialog'
import styles from './index.module.scss'
// import { Dialog } from '@documate/react'
// import '@documate/react/dist/style.css'

export const Documate: React.FC<{ endpoint: string } & PropsWithIsland> = (
  props
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { endpoint, __island, ...rest } = props
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <button
        className={`text-sm font-medium ${styles.documateButton}`}
        onClick={() => setOpen(true)}
        {...rest}
      >
        <svg className={styles.icon} viewBox="0 0 12 14" fill="url(#gradient)">
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#43CBFF" />
              <stop offset="100%" stopColor="#9708CC" />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.61655 13.3474C6.69072 13.3474 6.75047 13.3232 6.7958 13.2749C6.84525 13.2306 6.87616 13.1721 6.88852 13.0996C6.97094 12.4628 7.0616 11.9269 7.1605 11.4916C7.26352 11.0564 7.39951 10.6997 7.56847 10.4216C7.73742 10.1435 7.96202 9.92194 8.24223 9.75671C8.52245 9.59147 8.88099 9.46454 9.31782 9.37581C9.7587 9.28313 10.2986 9.20257 10.9373 9.13407C11.0156 9.12598 11.0774 9.09776 11.1227 9.04939C11.1722 9.00103 11.1969 8.94061 11.1969 8.86806C11.1969 8.79552 11.1722 8.7351 11.1227 8.68674C11.0774 8.63837 11.0156 8.61015 10.9373 8.60206C10.2986 8.53356 9.7587 8.45498 9.31782 8.36634C8.88099 8.27366 8.52245 8.1447 8.24223 7.97946C7.96202 7.81424 7.73742 7.59259 7.56847 7.31452C7.39951 7.03646 7.26352 6.6798 7.1605 6.24456C7.0616 5.80932 6.97094 5.27132 6.88852 4.63056C6.87616 4.56205 6.84525 4.50563 6.7958 4.4613C6.75047 4.41293 6.69072 4.38876 6.61655 4.38876C6.54237 4.38876 6.48056 4.41293 6.4311 4.4613C6.38578 4.50563 6.35693 4.56205 6.34456 4.63056C6.26627 5.27132 6.17561 5.80932 6.07259 6.24456C5.97369 6.6798 5.8377 7.03646 5.66462 7.31452C5.49566 7.59259 5.27108 7.81424 4.99086 7.97946C4.71064 8.1447 4.35212 8.27366 3.91531 8.36634C3.4785 8.45498 2.93866 8.53356 2.2958 8.60206C2.21751 8.61015 2.15363 8.63837 2.10418 8.68674C2.05473 8.7351 2.03001 8.79552 2.03001 8.86806C2.03001 8.94061 2.05473 9.00103 2.10418 9.04939C2.15363 9.09776 2.21751 9.12598 2.2958 9.13407C2.93454 9.21462 3.47231 9.30533 3.90913 9.4061C4.34594 9.50283 4.70239 9.63175 4.97849 9.79294C5.25871 9.95413 5.48331 10.1718 5.65226 10.4458C5.82122 10.7158 5.95721 11.0664 6.06023 11.4976C6.16325 11.9288 6.25802 12.4628 6.34456 13.0996C6.35693 13.1721 6.38578 13.2306 6.4311 13.2749C6.48056 13.3232 6.54237 13.3474 6.61655 13.3474ZM2.65431 7.00622C2.70377 7.00622 2.74498 6.9901 2.77795 6.95787C2.81091 6.92563 2.82945 6.88734 2.83358 6.84301C2.88714 6.46016 2.94072 6.16396 2.99429 5.9544C3.04786 5.74081 3.13234 5.58163 3.24773 5.47685C3.36311 5.36804 3.53412 5.28341 3.76078 5.22296C3.98742 5.16251 4.30267 5.094 4.70652 5.01744C4.81366 5.00131 4.86723 4.94287 4.86723 4.84212C4.86723 4.79377 4.85074 4.75548 4.81778 4.72727C4.78893 4.69503 4.75185 4.67489 4.70652 4.66682C4.30267 4.6104 3.98536 4.556 3.7546 4.50361C3.52794 4.44719 3.35693 4.36458 3.24155 4.25576C3.13028 4.14293 3.04786 3.9777 2.99429 3.76008C2.94072 3.53843 2.88714 3.23417 2.83358 2.84729C2.82122 2.73848 2.76146 2.68408 2.65431 2.68408C2.54717 2.68408 2.48536 2.7405 2.46888 2.85334C2.42355 3.23215 2.3741 3.52836 2.32053 3.74195C2.26696 3.95553 2.18248 4.11673 2.06709 4.22554C1.95171 4.33032 1.77863 4.41293 1.54786 4.47339C1.32121 4.52981 1.00597 4.59428 0.602121 4.66682C0.494978 4.68698 0.441406 4.74541 0.441406 4.84212C0.441406 4.94287 0.503219 5.00131 0.626846 5.01744C1.02245 5.08594 1.33357 5.14841 1.56023 5.20483C1.791 5.26125 1.96201 5.34386 2.07328 5.45267C2.18454 5.56148 2.26696 5.72469 2.32053 5.94231C2.3741 6.1559 2.42355 6.45412 2.46888 6.83697C2.48536 6.9498 2.54717 7.00622 2.65431 7.00622ZM5.49773 3.08909C5.56366 3.08909 5.60487 3.05281 5.62135 2.98028C5.67493 2.67803 5.72643 2.45638 5.77589 2.31533C5.82534 2.17025 5.92217 2.06749 6.0664 2.00704C6.21064 1.94659 6.45377 1.88815 6.7958 1.83173C6.86998 1.81561 6.90707 1.77531 6.90707 1.71084C6.90707 1.6383 6.86998 1.598 6.7958 1.58993C6.45377 1.52949 6.21064 1.47105 6.0664 1.41463C5.92217 1.35418 5.82534 1.25343 5.77589 1.11238C5.72643 0.967306 5.67493 0.741626 5.62135 0.435348C5.60487 0.362808 5.56366 0.326538 5.49773 0.326538C5.42355 0.326538 5.38234 0.362808 5.3741 0.435348C5.31641 0.741626 5.26283 0.967306 5.21338 1.11238C5.16806 1.25343 5.07121 1.35418 4.92286 1.41463C4.77863 1.47105 4.5355 1.52949 4.19347 1.58993C4.11929 1.598 4.0822 1.6383 4.0822 1.71084C4.0822 1.77531 4.11929 1.81561 4.19347 1.83173C4.5355 1.88815 4.77863 1.94659 4.92286 2.00704C5.07121 2.06749 5.16806 2.17025 5.21338 2.31533C5.26283 2.45638 5.31641 2.67803 5.3741 2.98028C5.38234 3.05281 5.42355 3.08909 5.49773 3.08909Z"
          />
        </svg>
        Ask AI
      </button>
      <Dialog
        open={isOpen}
        endpoint={endpoint}
        onClose={() => setOpen(false)}
      />
    </>
  )
}