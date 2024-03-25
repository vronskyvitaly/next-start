import { Typography } from '@/components/ui/typography/typography'
import { TypographyVariant } from '@/components/common/enums'

type Props = {
  subTitle?: string
  children?: React.ReactNode
  srcImg?: string
}
export const IconWrapper = ({ subTitle, children, srcImg }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      {children}
      <img
        style={{ borderRadius: '50%', width: '28px' }}
        src={srcImg}
        alt={'def img'}
      />
      <Typography variant={TypographyVariant.PV2}>{subTitle}</Typography>
    </div>
  )
}
