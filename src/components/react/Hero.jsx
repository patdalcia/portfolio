
export default function Hero(props) {
 
  const selectedImage = 'https://patdalcia-portfolio.b-cdn.net/hero/SelectedHero/PotStill-min.png'

    return (
        <>
            <div 
            className="min-h-screen bg-center bg-cover"
            style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundColor: `#808080`,
            }}>
                {props.test}
            </div>
        </>
    )
}
