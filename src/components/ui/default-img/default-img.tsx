type Props = {
  width?: string
  height?: string
  borderRadius?: string
  backgroundColor?: string
  defaultImgTitle?: string
}
export const DefaultImg = ({
  width = '100%',
  height = '220px',
  borderRadius = '4px',
  backgroundColor = '#494848',
  defaultImgTitle
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderRadius: borderRadius
      }}
    >
      {defaultImgTitle ?? ''}
    </div>
  )
}
