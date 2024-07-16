"use client"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@instamate/ui"
import { Card, CardHeader, CardTitle, CardContent } from "@instamate/ui"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@instamate/ui"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { Button } from "@instamate/ui"

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="flex items-center h-16 px-6 border-b shrink-0">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold text-primary" prefetch={false}>
                    <ApertureIcon className="w-6 h-6" />
                    <span>Social Media Dashboard</span>
                </Link>
                <div className="ml-auto flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Logged in as John Doe</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Key Metrics</CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-5 h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-bold">12.4K</div>
                            <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-bold">1.2K</div>
                            <div className="text-sm text-muted-foreground">Engagements</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-bold">34</div>
                            <div className="text-sm text-muted-foreground">Posts</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-bold">$1.2K</div>
                            <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Scheduled Posts</CardTitle>
                        <Button variant="outline" size="sm">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            New Post
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Platform</TableHead>
                                    <TableHead>Content</TableHead>
                                    <TableHead>Scheduled At</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
                                            <span>Instagram</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="line-clamp-2">Check out our new product launch! #NewProduct #SocialMedia</div>
                                    </TableCell>
                                    <TableCell>
                                        <div>2023-05-15 10:30 AM</div>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-5 h-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <TwitterIcon className="w-5 h-5 text-[#1DA1F2]" />
                                            <span>Twitter</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="line-clamp-2">
                                            Don't miss our upcoming webinar on social media marketing strategies! #SocialMediaMarketing
                                            #Webinar
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>2023-05-20 2:00 PM</div>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-5 h-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <LinkedinIcon className="w-5 h-5 text-[#0077B5]" />
                                            <span>LinkedIn</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="line-clamp-2">
                                            Excited to announce our new partnership! #NewPartnership #SocialMedia
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>2023-05-25 4:30 PM</div>
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoveHorizontalIcon className="w-5 h-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Social Profiles</CardTitle>
                        <Button variant="outline" size="sm">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Add Profile
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <InstagramIcon className="w-6 h-6 text-[#E1306C]" />
                                <div>
                                    <div className="font-medium">Instagram</div>
                                    <div className="text-sm text-muted-foreground">@acme_social</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <TwitterIcon className="w-6 h-6 text-[#1DA1F2]" />
                                <div>
                                    <div className="font-medium">Twitter</div>
                                    <div className="text-sm text-muted-foreground">@acme_social</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <LinkedinIcon className="w-6 h-6 text-[#0077B5]" />
                                <div>
                                    <div className="font-medium">LinkedIn</div>
                                    <div className="text-sm text-muted-foreground">Acme Social</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FacebookIcon className="w-6 h-6 text-[#1877F2]" />
                                <div>
                                    <div className="font-medium">Facebook</div>
                                    <div className="text-sm text-muted-foreground">Acme Social</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-1 md:col-span-2 lg:col-span-3">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Performance Overview</CardTitle>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="w-5 h-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <LineChart className="aspect-[9/4]" />
                            </div>
                            <div>
                                <BarChart className="aspect-[9/4]" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

function ApertureIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m14.31 8 5.74 9.94" />
            <path d="M9.69 8h11.48" />
            <path d="m7.38 12 5.74-9.94" />
            <path d="M9.69 16 3.95 6.06" />
            <path d="M14.31 16H2.83" />
            <path d="m16.62 12-5.74 9.94" />
        </svg>
    )
}


function BarChart(props: any) {
    return (
        <div {...props}>
            <ResponsiveBar
                data={[
                    { name: "Jan", count: 111 },
                    { name: "Feb", count: 157 },
                    { name: "Mar", count: 129 },
                    { name: "Apr", count: 150 },
                    { name: "May", count: 119 },
                    { name: "Jun", count: 72 },
                ]}
                keys={["count"]}
                indexBy="name"
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                padding={0.3}
                colors={["#2563eb"]}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 4,
                    tickPadding: 16,
                }}
                gridYValues={4}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                tooltipLabel={({ id }) => `${id}`}
                enableLabel={false}
                role="application"
                ariaLabel="A bar chart showing data"
            />
        </div>
    )
}


function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LineChart(props: any) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={[
                    {
                        id: "Desktop",
                        data: [
                            { x: "Jan", y: 43 },
                            { x: "Feb", y: 137 },
                            { x: "Mar", y: 61 },
                            { x: "Apr", y: 145 },
                            { x: "May", y: 26 },
                            { x: "Jun", y: 154 },
                        ],
                    },
                    {
                        id: "Mobile",
                        data: [
                            { x: "Jan", y: 60 },
                            { x: "Feb", y: 48 },
                            { x: "Mar", y: 177 },
                            { x: "Apr", y: 78 },
                            { x: "May", y: 96 },
                            { x: "Jun", y: 204 },
                        ],
                    },
                ]}
                margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                xScale={{
                    type: "point",
                }}
                yScale={{
                    type: "linear",
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                }}
                colors={["#2563eb", "#e11d48"]}
                pointSize={6}
                useMesh={true}
                gridYValues={6}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                role="application"
            />
        </div>
    )
}


function LinkedinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MoveHorizontalIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    )
}


function PlusIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function TwitterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}