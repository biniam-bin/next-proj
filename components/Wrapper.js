
import Nav from "./Nav"

const Wrapper = ({Component, pageProps}) => {
  return (
      <div>
          {/* <Nav/> */}
          <div className="overflow-clip">
              <Component {...pageProps} />
              
          </div>
    </div>
  )
}

export default Wrapper