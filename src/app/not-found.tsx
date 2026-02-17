import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="max-w-md w-full rounded-2xl shadow-lg border">
        <CardContent className="flex flex-col items-center text-center p-10 space-y-6">

          {/* 404 Text */}
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            404
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-sm">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
