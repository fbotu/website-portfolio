export const WebsiteImage = ({ image }) => {
  const { src, alt } = image;
  return (
  <>
    <div className={styles.imageWrapper}>
    <Image
      src={fbm1}
      alt={alt}
      layout="responsive"
    // width={700}
    // height={475}
    />
    </div>
  </>
  ); 
}