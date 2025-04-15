import { useState } from 'react'
import dotaLogo from './assets/Dota_logo.svg.png'
import RadiantLogo from './assets/Cosmetic_icon_Radiant_Ancient.webp'
import DireLogo from './assets/Cosmetic_icon_Dire_Ancient.webp'
import Select from "./Select.jsx"
import './App.css'
import BarChart from './Barchart.jsx'


function App() {
  
    
  
  return (
    <>
      {/* Draft container with background image */}
      <div 
        className="bg-[url(./assets/dota-dota2-radiant-dire-logo.webp)] bg-left pt-[300px]  flex flex-col gap-[1px] w-full h-1/2 bg-cover bg-left"
      >
        {/* Navbar */}
        <div className="flex items-center text-white w-full absolute top-0 left-0 right-0 z-10">
          <a href="https://upload.wikimedia.org/wikipedia/commons/c/c2/Dota_logo.svg">
            <img 
              src={dotaLogo} 
              className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_0.5em_rgba(100,108,255,0.67)]" 
              alt="Dota2 2 Logo"
            />
          </a>
          
          <div>
            <h1 className="pl-12">Dota 2 Draft Assistant</h1>  
            <h4>A draft assistant for Dota 2</h4>
          </div>
        </div>
        
        <h1>Draft</h1>
        
        {/* Team Headers */}
        <div className="absolute left-[10px]">
          <h1 className="text-green-500">Radiant</h1>
        </div>
        
        <div className="absolute right-0">
          <h1 className="text-red-500">Dire</h1>
        </div>
        
        {/* Hero Row 1 */}
        <div className="flex flex-row justify-between w-full h-full">
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
          
          <div className="text-white">
            <h2>Hero1</h2>
          </div>
          
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
        </div>
        
        {/* Hero Row 2 */}
        <div className="flex flex-row justify-between w-full h-full">
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
          
          <div className="text-white">
            <h2>Hero 2</h2>
          </div>
          
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
        </div>
        
        {/* Hero Row 3 */}
        <div className="flex flex-row justify-between w-full h-full">
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
          
          <div className="text-white">
            <h2>Hero 3</h2>
          </div>
          
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
        </div>
        
        {/* Hero Row 4 */}
        <div className="flex flex-row justify-between w-full h-full">
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
          
          <div className="text-white">
            <h2>Hero 4</h2>
          </div>
          
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
        </div>
        
        {/* Hero Row 5 */}
        <div className="flex flex-row justify-between w-full h-full">
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
          
          <div className="text-white">
            <h2>Hero 5</h2>
          </div>
          
          <div className="block text-white h-40 w-40 border-2 border-white">
            <Select/>
          </div>
        </div>
      </div>

      {/* Suggestion and Chart Container */}
      <div className="flex w-full h-full justify-evenly border-2 border-white">
        <div className="mt-auto flex-col text-center border-x-white">
          <h2 className="text-white relative">Suggestion</h2>
            <h2>This column suggestion to players what heroes to pick, Top 10 heroes</h2>
            <div className="flex gap-y-2">
              <div className="flex-auto w-1/2">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 gap-y-20 border-3 border-green-500/100"/>
                <h3 className="text-left">Hero 1</h3>
              </div>
              <div className="flex-auto w-1/2 ">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-green-500/75"/>
                <h3 className="text-left">Hero 2 </h3>
              </div>        
            </div>
            <div className="flex">
              <div className="flex-auto w-1/2 ">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-green-500/50"/>
                <h3 className="text-left">Hero 3 </h3>
              </div>        
              <div className="flex-auto w-1/2">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-green-500/40"/>
                <h3 className="text-left">Hero 4 </h3>
              </div>
            </div>
            <div className="flex">
              <div className="flex-auto w-1/2 ">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-orange-500/100"/>
                <h3 className="text-left">Hero 5 </h3>
              </div>
              <div className="flex-auto w-1/2 ">
                <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-orange-500/75"/>
                <h3 className="text-left">Hero 6 </h3>
              </div>
            </div>
    
            <div className="flex">
                <div className="flex-auto w-1/2 ">
                  <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-orange-500/50 "/>
                  <h3 className="text-left">Hero 7 </h3>
                </div>        
                <div className="flex-auto w-1/2">
                  <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-orange-500/40"/>
                  <h3 className="text-left">Hero 8 </h3>
                </div>      
            </div>  
            <div className="flex">
                  <div className="flex-auto w-1/2">
                    <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-red-500/100"/>
                    <h3 className="text-left">Hero 9</h3>
                  </div>                
                  <div className="flex-auto w-1/2">
                    <img src='https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png' className="w-30 h-20 border-3 border-red-500/50"/>
                    <h3 className="text-left">Hero 10</h3>
                  </div>
            </div>                  
        </div>
      </div>
       
    </>
  )
}
  
export default App