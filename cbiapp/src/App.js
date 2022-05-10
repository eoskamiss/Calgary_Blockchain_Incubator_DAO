import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

const OilTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
  const [greeting, setGreetingVal] = useState('');

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(OilTokenAddress, Greeter.abi, provider)
      try {
        //const data = await contract.greet()
        //console.log('data: ', data)
        console.log
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      setGreetingVal('')
      await transaction.wait()
      fetchGreeting()
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingVal(e.target.value)} placeholder="Set greeting" value={greeting} />

        <br />

      </header>
    </div>
  );
}

export default App;