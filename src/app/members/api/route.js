// import Data from "@/database/Data.json"
import { Data } from "@/database/Data"
import { NextResponse } from "next/server"


export async function GET () {
    const memebersData = Data
    return NextResponse.json(memebersData, { status: 200 })
}