"use client"


import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react"
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Document() {

const {user} =useUser();
const create=useMutation(api.documents.create)
const router =useRouter();

 const onCreate=()=>{
  const promise=create({title:"Untitled"})
  .then((documentId)=>router.push(`/documnets/${documentId}`))
  
  toast.promise(promise,{
    loading:"Creating a new Note...",
    success:"New Note Created!",
    error:"Failed to create a new Note."
  })
 }

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'> 
      <Image
        src="/empty.png"
        height="300"
        width="300"
        className="dark:hidden"
        alt="empty"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        className="hidden dark:block"
        alt="empty"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2"/>
        Create a note
      </Button>
    </div>
  )
}
