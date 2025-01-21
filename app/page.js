'use client'

import { api } from "@/api";
import CardLayout from "@/components/CardLayout";
import Spinner from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {

  const [makes, setMakes] = useState([]);  

  const [selectedMake, setSelectedMake] = useState();
  const [selectedModel, setSelectedModel] = useState();

  useEffect(() => {
    const fetchMakes = async () => {
      const response = await api.getMakes();
      setMakes(response.data.Results);
    };
    fetchMakes();
  },[])

  const years = Array.from({ length: 11 }, (_, i) => i + 2015);

  const handleMakeSelector = (value) => {
    setSelectedMake(value);
  }

  const handleModelSelector = (value) => {
    setSelectedModel(value);
  }



  return (
    <div className="w-full h-full flex justify-center pt-10">
      <div className="w-[400px]">
        <h1 className="text-center my-3 text-2xl font-bold">Car Dealer Filter</h1>
        <CardLayout>
          <div className="py-10 px-10">
            <div className="w-full gap-5">
              <div className="flex-col">
                <label htmlFor="make" className="block text-lg font-bold mb-1">Make</label>
                <Select required onValueChange={handleMakeSelector}>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="make..." />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      makes.map(({MakeId, MakeName}) => (
                        <SelectItem key={MakeId} value={MakeId.toString()}>{MakeName}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="model" className="block text-lg font-bold mb-1 mt-3">Model</label>
                <Select required onValueChange={handleModelSelector}>
                  <SelectTrigger className="w-full ">
                    <SelectValue placeholder="model..." />
                  </SelectTrigger>
                  <SelectContent>
                  {
                    years.map((year) => (
                      <SelectItem key={year} value={year.toString()} className="text-[#000]">{year}</SelectItem>
                    ))
                  }
                  </SelectContent>
                </Select>
              </div>
              <Button className="font-bold mt-6" disabled={!selectedMake || !selectedModel}>
                <Link href={`/result/${selectedMake}/${selectedModel}`}>
                  Search
                </Link>
              </Button>
            </div>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}
