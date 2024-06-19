import { IconProps, IconWrapper } from '@/assets/icons/Icon-wrapper'

/**
 *
 * @param allProps
 * @constructor
 * @example <FavoriteIcon color={'white'} size={2} />
 */
export const FavoriteIcon = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          {...props}
        >
          <path
            d='M11 19.35L9.55 18.03C4.4 13.36 1 10.28 1 6.5C1 3.42 3.42 1 6.5 1C8.24 1 9.91 1.81 11 3.09C12.09 1.81 13.76 1 15.5 1C18.58 1 21 3.42 21 6.5C21 10.28 17.6 13.36 12.45 18.04L11 19.35Z'
            stroke={'black'}
            fill='currentColor'
          />
        </svg>
      }
      {...restProps}
    />
  )
}
