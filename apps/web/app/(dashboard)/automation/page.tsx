import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@instamate/ui";
import Link from "next/link";

const Page = () => {
  // try {
  //   const { data } = await axios.get(
  //     `https://graph.facebook.com/v3.2/${session?.instagramBusinessAccount?.id}?fields=business_discovery.username(instamate.in){followers_count,media_count,media{comments_count,like_count,media_url,media_type}}&access_token=${session?.accessToken}`,
  //   );
  //   console.log("data", data?.business_discovery?.media?.data);
  // } catch (error: any) {
  //   console.log("error", error.response.data);
  // }
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <p>0 flows</p>
        <Button asChild>
          <Link href="/automation/create">Create Automation</Link>
        </Button>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="w-full grid grid-cols-5 gap-2">
            <TableHead className="truncate text-sm px-0 md:px-2 text-center">
              Name
            </TableHead>
            <TableHead className="truncate text-sm px-0 md:px-2 text-center">
              Executions
            </TableHead>
            <TableHead className="truncate text-sm px-0 md:px-2 text-center">
              Last updated
            </TableHead>
            <TableHead className="truncate text-sm px-0 md:px-2 text-center">
              Status
            </TableHead>
            <TableHead className="truncate text-sm px-0 md:px-2 text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* <TableRow>
            <TableCell className="font-medium">Last updated</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
};

export default Page;
