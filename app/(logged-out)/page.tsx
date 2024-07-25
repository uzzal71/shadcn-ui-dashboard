import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LadingPage() {
    return (
        <>
            <h1 className="flex gap-2">
                <PersonStandingIcon size={50} className="text-pink-500"/>Welcome, SaleSkip!
            </h1>
            <p className="max-w-md">Skip repetitive and manual sales-marketing task. get highly productive throught automation and save tons of time!</p>
            <div className="flex gap-2 items-center">
                <Button asChild>
                    <Link href="/login">Log in</Link>
                </Button>
                <small>or</small>
                <Button asChild variant="outline">
                    <Link href="/sign-up">Sign up</Link>
                </Button>
            </div>
        </>
    )
}