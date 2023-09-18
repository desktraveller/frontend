import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from'react'
import {ethers} from 'ethers;
import contractABI from "./contracts/abi.json"

function App() {
  const [wallet, setwallet] = useState(null);
  const [account, setAccount] = useState(null);

  const contractAddress = "";
  const [contract, setContract] = useState(null);


  function getWallet() {
    if (window. ethereum) {

      setWallet(window.ethereum);
      alert("connected to Metamask")

    } else {
      alert ("please install MetaMask");
    }

  }

  function connectAccount() {
    const accounts = wallet.request({ method: 'eth_requestAccounts'});
    try{
      if (Array.isArray(accounts) == true) {
        handleAccount(accounts[0]);
      } else {
        handleAccount(accounts);
      }
    } catch (error) {
      alert("could not connect an account because of : " + error);
    }

  }

function getContract() {
  let provider = new ethers.providers.Web3Provider(window.ethereum)
  let signer = provider.getsigner();

  let  mycontract = new ethers.Contract(contractAddress, contractABI, signer);
  setContract(myContract);
}

  function handleAccount(account) {
    setAccount(account);
    getContract();
    alert ("Connected to account successfully, the account adress is:"+ account);

  }
  const [newScore,setNewScore] = useState(;)


  function setScoreFrontend() {

  
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
