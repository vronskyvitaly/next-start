type Props = {
  width?: string
  height?: string
  borderRadius?: string
  backgroundColor?: string
}
export const DefaultImg = ({
  width = '100%',
  height = '220px',
  borderRadius = '4px',
  backgroundColor = '#494848'
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        borderRadius: borderRadius
      }}
    ></div>
  )
}
