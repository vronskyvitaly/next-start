import { IconProps, IconWrapper } from '@/assets/icons/Icon-wrapper'

/**
 *
 * @param allProps
 * @constructor
 * @example <BasketIcon color={'white'} size={2} />
 */
export const BasketIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <>
      <IconWrapper
        icon={
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
          >
            <path
              d='M4.92857 24C4.43712 24 4.00028 23.8263 3.61804 23.4789C3.2358 23.1316 2.97187 22.6842 2.82626 22.1368L0.0413679 10.4526C-0.0496415 10.0526 0.00951461 9.68421 0.218836 9.34737C0.428158 9.01053 0.714837 8.84211 1.07887 8.84211H6.26641L11.0717 0.568421C11.1627 0.4 11.2901 0.263158 11.4539 0.157895C11.6178 0.0526316 11.7907 0 11.9727 0C12.1547 0 12.3276 0.0526316 12.4915 0.157895C12.6553 0.263158 12.7827 0.4 12.8737 0.568421L17.679 8.84211H22.9211C23.2852 8.84211 23.5718 9.01053 23.7812 9.34737C23.9905 9.68421 24.0496 10.0526 23.9586 10.4526L21.1737 22.1368C21.0281 22.6842 20.7642 23.1316 20.382 23.4789C19.9997 23.8263 19.5629 24 19.0714 24H4.92857ZM4.90127 21.4737H19.0987L21.5014 11.3684H2.49862L4.90127 21.4737ZM12 18.9474C12.6007 18.9474 13.1149 18.7 13.5426 18.2053C13.9704 17.7105 14.1842 17.1158 14.1842 16.4211C14.1842 15.7263 13.9704 15.1316 13.5426 14.6368C13.1149 14.1421 12.6007 13.8947 12 13.8947C11.3993 13.8947 10.8851 14.1421 10.4574 14.6368C10.0296 15.1316 9.81578 15.7263 9.81578 16.4211C9.81578 17.1158 10.0296 17.7105 10.4574 18.2053C10.8851 18.7 11.3993 18.9474 12 18.9474ZM8.91478 8.84211H15.0579L11.9727 3.53684L8.91478 8.84211Z'
              fill='white'
            />
          </svg>
        }
        {...restProps}
      />
    </>
  )
}
