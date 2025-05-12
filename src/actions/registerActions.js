"use server";

import connectDb from "@/helper/MongoConfig";
import { members } from "@/models/MemberSchema";

export async function registerMember(formData) {
  const data = {
    name: formData.get("name"),
    fatherName: formData.get("fatherName"),
    motherName: formData.get("motherName"),
    birthDate: formData.get("birthDate"),
    number: formData.get("number"),
    className: formData.get("className"),
    studying: formData.get("studying"),
  };

  try {
    await connectDb();
    await members.create(data);
    
    // Return success
    return { success: true };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, error: "Registration failed" };
  }
}
