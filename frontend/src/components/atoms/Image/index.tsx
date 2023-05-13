export interface ImageProps {
  src: string
  width?: string
  height?: string
  alt?: string
}
const Image = (props: ImageProps) => {
  const { src, height, width, alt } = props
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid="image"
    ></img>
  )
}
export default Image
