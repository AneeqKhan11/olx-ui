import logo from './logo.svg';
import './App.css';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import imgurl from './images/imgurl.jpg'
import imgurl2 from './images/imgurl2.jpg'
import imgurl3 from './images/imgurl3.jpg'

function App() {
  return (
    <div className="main_container">

      <div className="container_1">
        <div className="c1_chaild1">
          <div className="c1_chaild1_1">
            <div className="c1_chaild1_s1">
              < img src={img1} className="img1"/>
            </div>
            <div className="c1_chaild1_s2">
              <div className="icon_div">
                <img src={img2} className="img2"/>
              </div>
              MOTORS
            </div>
            <div className="c1_chaild1_s3">
            <div className="icon_div">
                <img src={img3} className="img3"/>
              </div>
              PROPERTY
            </div>
          </div>
        </div>

        <div className="c1_chaild2">
          <div className="c1_chaild2_s1_1">
            <div className="c1_chaild2_s1">
            <img src={img4} className="img4"/>
            </div>
            <div className="c1_chaild2_s2">
              <div className='icon'>
                <img src={img9} className="img9"></img>
              </div>

              <input className="input1" placeholder='Search city, area or locality'></input>

            </div>
            <div className="c1_chaild2_s3">
              <input className="input2" placeholder='Find Cars, Mobile Phones and more...
'></input>
              <div className="search_icon">
                <img src={img5} className="img5"/>
              </div>
            </div>
            <div className="c1_chaild2_s4">
              <div className="c1_chaild2_s4_1">
                <div className="msg_div">
                  <img src={img6} className="img6"/>
                </div>
              </div>
              <div className="c1_chaild2_s4_2">
                <div className="bell_div">
                  <img src={img7} className="img7"></img>
                </div>
              </div>
              <div className="c1_chaild2_s4_3">
                <div className="profile_div">
                  <img src={img10}className="img10"/>
                </div>
              </div>
            </div>
            <div className="c1_chaild2_s5">
              <button className="button2"><h4> <img src={img11} className="img11"></img>SELL</h4></button>
            </div>
          </div>

        </div>

      </div>

      <div className="body">

        <div className="container_2">
          <div className="c2_child1">
            <div className="c2_child1_s1"><b>ALL CATEGORIES</b></div>
            <div className="c2_child1_s2">Mobile Phones</div>
            <div className="c2_child1_s3">Cars</div>
            <div className="c2_child1_s4">Motorcycles</div>
            <div className="c2_child1_s5">Houses</div>
            <div className="c2_child1_s6">TV - Video - Audio</div>
            <div className="c2_child1_s7">Tablets</div>
            <div className="c2_child1_s8">Land & Plots</div>
          </div>
        </div>

        <div className="container_3">
          <div className="c3_child1">
            <img src={imgurl} className="imgurl"/>
          </div>
        </div>

        <div className="container_4">
          <div className="c4_chaild1">
            <img src={imgurl2} className="imgurl2"/>
          </div>
        </div>

        <div className="container_5">
          <div className="c5_child1"><h1><p>Fresh recommendations</p></h1></div>

          <div className="c5_child2">

            <div className="c5_child2_s1"></div>
            <div className="c5_child2_s2"></div>
            <div className="c5_child2_s3"></div>
            <div className="c5_child2_s4"></div>
            <div className="c5_child2_s5"></div>
            <div className="c5_child2_s6"></div>
            <div className="c5_child2_s7"></div>
            <div className="c5_child2_s8"></div>
            <div className="c5_child2_s9"></div>
            <div className="c5_child2_s10"></div>
            <div className="c5_child2_s11"></div>
            <div className="c5_child2_s12"></div>
            <div className="c5_child2_s13"></div>
            <div className="c5_child2_s14"></div>
            <div className="c5_child2_s15"></div>
            <div className="c5_child2_s16"></div>
            <div className="c5_child2_s17"></div>
            <div className="c5_child2_s18"></div>
            <div className="c5_child2_s19"></div>
            <div className="c5_child2_s20"></div>
            <div className="c5_child2_s21"></div>

          </div>
          <div className="button_div"><button className="button1"><h1 className="h1">Load More</h1></button></div>

        </div>


        <div className="container_6">
          <div className="c6_child1">
            <img src= {imgurl3} className="imgurl3" />
          </div>
        </div>

        <div className="container_7">
          <div className="c7_child1"></div>
        </div>

        <div className="container_8">
          <div className="c8_child1"></div>
          <div className="c8_child2">
          <p>Free Classifieds in Pakistan . © 2006-2022 OLX</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
