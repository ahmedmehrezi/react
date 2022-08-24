import './App.css';
import logo from './healthyfood.png';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './hk.jpg';


function App() {
  return (
    <div className="">

      <div className="navop">
        <div className="text-center mt-4 mb-4 ">
          <img className="logo" src={logo} />
        </div>
        
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <a><p className='ll' href="/home">Home</p></a>
          </Nav.Item>
          <Nav.Item>
            <a><p className='ll' href="/home">About Us</p></a>
          </Nav.Item>
          <Nav.Item>
          <a><p className='ll' href="/home">Where To Buy</p></a>
          </Nav.Item>
          <Nav.Item>
          <a><p className='ll' href="/home">Contact Us</p></a>
          </Nav.Item>
        </Nav>
      </div>

      <div className='cardg'>
      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7d2b04c0f6444f88-tMSv_ZD_-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Roasted Mixed Nuts <br></br> (50% Less Salt)</p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>30dt</Card.Text>
          <Card.Text className='new_price'>25dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/4003_RoastedCashewsS-pMIt_XD0-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Roasted Cashews <br></br> (50% Less Salt) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>20dt</Card.Text>
          <Card.Text className='new_price'>15dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/0f73019f521e7d31-0oX6KOAa-medium.jpg" />
      <Card.Body>
        <Card.Title><p> Raw Mixed Nuts  <br></br> (No Shell) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>25dt</Card.Text>
          <Card.Text className='new_price'>20dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      </div>


      <div className='cardg'>
      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/67366b60e62d99e6-973s2IeW-medium.jpg" />
      <Card.Body>
        <Card.Title><p> Organic Walnuts <br></br> (Raw, No Shell) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>20dt</Card.Text>
          <Card.Text className='new_price'>13dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/3004awAlmonds-GXvAOAkQ-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Raw Almonds  <br></br> (No Shell) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>10dt</Card.Text>
          <Card.Text className='new_price'>5dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/80a1731391ab78a2-47FbSsCK-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Supreme Roasted  <br></br>Mixed  Nuts  </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>30dt</Card.Text>
          <Card.Text className='new_price'>23dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      </div>

      <div className='cardg'>
      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7015_Roasted+Sunflow-bwIWKQax-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Roasted Sunflower  <br></br> Seeds  </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>50dt</Card.Text>
          <Card.Text className='new_price'>40dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/71d0c7da925352d7-vkC7Glb0-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Raw Pistachios  <br></br> (No shell) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>29dt</Card.Text>
          <Card.Text className='new_price'>25dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      <div className='cardop '>
        <Card className='border-0 ff'> 
      <Card.Img variant="top" className='imgpr' src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7014_Raw+Sunflower+S-SyctYNTX-medium.jpg" />
      <Card.Body>
        <Card.Title><p>Raw Sunflower Seeds <br></br>  (In Shell) </p></Card.Title>
        <div className='CardText'>
          <Card.Text className='old_price'>11dt</Card.Text>
          <Card.Text className='new_price'>7dt</Card.Text>
        </div>
        <button className='btn'><p className='Add_to_Cart'>Add to Cart</p></button>
      </Card.Body>
      </Card>
      </div>

      </div>

      <hr></hr>

      <div className='des'>
        <img className="Img" src={img} />

        <p className='pargraf'>The key to good health is good nutrition, so Healthy Food Guide (HFG)<br></br>
          is your complete guide to healthy eating and getting the best nutrition.<br></br>
          We don’t believe in diets. We do believe in healthy eating every day.<br></br>
          There are many ways to achieve this, and different approaches work for<br></br>
          different people. Changes to healthier eating should be practical,enjoyable<br></br>
          and sustainable, not restrictive and unsociable.Our recipes section is full<br></br>
          of delicious, nutrition packed dishes with affordable ingredients and simple<br></br>
          preparation.Our advice section has accurate, well researched health information<br></br>
          you can rely on, including some very useful downloadable resources.Our shopping<br></br>
          section helps you make informed choices as to which products are best for you,<br></br>
          or your family. You are investing in your health when you subscribe to Healthy Food<br></br>
          Guide.The information provided on this site is designed to support, not to replace,<br></br>
          the relationship that exists between a patient/site visitor and his/her physician.
        </p>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <div className='footer'>
      <img className="logo1" src={logo} />
      <p className='devwares' >© Devwares, 2022. All rights reserved.</p>

      <div className='icons'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
      </svg>&ensp;

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>
      </div>
      </div>


    </div>
  );
}

export default App;
