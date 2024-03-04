import { useState } from 'react';
import './styles.css'

/* Challenge
Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir.      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {

  const [current, setCurrent] = useState(0)

  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]

  const handleClick = ()=>{
    setCurrent(current + 1)
    if(current >= weatherData.length - 1){
      setCurrent(0)
    } else if(current < 0){
     setCurrent(weatherData.length - 1)
    }
  }

  return (
    <div className= {
      current === 0 && "app-container güneşli-background" ||
      current === 1 && "app-container yağmurlu-background" ||
      current === 2 && "app-container karlı-background"
    }>
      <div className='weather-container'>
        <div className='icon'>
        {current === 0 && <div>☀️</div>}
        {current === 1 && <div>🌧️</div>}
        {current === 2 && <div>❄️</div>}
        </div>
        <div className='condition-text'>{weatherData[current].condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{weatherData[current].lowTemp}</p>
            <p>En Düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{weatherData[current].highTemp}</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{weatherData[current].day}</div>
      </div>
      <button onClick={handleClick}>Test</button>
    </div>
  )
}
