
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [device,setDevice] = useState()
  const [ip,setIp] = useState()

  async function getDevice(){
    const req = await fetch('/api/device')
    const result = await req.json()
    setDevice(result.ua)
    setIp(result.ip)
    return
  }

  useEffect(()=>{
    getDevice()
  },[])

  if(!device) return

  return (
    <>
      <p className="bold">ua</p>
      <p>{device?.ua}</p>
      <p className="bold">Trình duyệt</p>
      <p>{JSON.stringify(device?.browser)}</p>
      <p className="bold">Thiết bị</p>
      <p>{JSON.stringify(device?.device)}</p>
      <p className="bold">engine</p>
      <p>{JSON.stringify(device?.engine)}</p>
      <p className="bold">Hệ điều hành</p>
      <p>{JSON.stringify(device?.os)}</p>
      <p className="bold">CPU</p>
      <p>{JSON.stringify(device?.cpu)}</p>
      <p className="bold">IP</p>
      <p>{ip}</p>
    </>
  );
}
