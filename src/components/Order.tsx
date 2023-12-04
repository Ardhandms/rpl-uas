'use client'

import useGetUser from "@/hooks/useGetUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FlashScreen from "./FlashScreen";
import { useToast } from "@/app/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"
import { Order } from "../../index.types";

function Order() {
  const [data, setData] = useState<Order[] | null>(null);
  const [fetchStatus, setFetchStatus] = useState(false);
  const { user, loading, userAuthenticate } = useGetUser();
  const { toast } = useToast();

  useEffect(() => {
    userAuthenticate();
  }, []);

  useEffect(() => {
    if (!loading && user) {
      setFetchStatus(true);

      fetch(`/api/order?pageSize=100&userId=${user.id}`, {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            setData(res.data);
            return;
          }

          toast({
            title: res.status,
            description: res.message,
            variant: 'destructive'
          });
        })
        .catch((error) => {
          toast({
            title: 'Error',
            description: (error as Error).message,
            variant: 'destructive'
          });
        })
        .finally(() => {
          setFetchStatus(false);
        })
    }
  }, [user, loading]);

  if (loading || fetchStatus) return <FlashScreen />

  return (
    <section className="mt-8">
      <h2 className="text-4xl font-semibold leading-relaxed text-center">
        Riwayat Pemesanan
      </h2>

      {!fetchStatus && data !== null && (
        <div className="py-10">
          <div className="text-right">
            <Link href={"/isipesanan"} className="bg-blue-700 rounded-full text-white px-8 py-2">
              Buat Pesanan
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <Table className="text-base">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Pembayaran</TableHead>
                  <TableHead>Merk Sepatu</TableHead>
                  <TableHead>Tipe Paket</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-gray-600">
                {data.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{`INV${order.id}`}</TableCell>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.paymentMethod}</TableCell>
                    <TableCell>{order.shoesType}</TableCell>
                    <TableCell>{order.packageType}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {!fetchStatus && data === null && (
        <div className="text-center py-10 min-h-[350px] flex items-center justify-center">
          <Link href={"/isipesanan"} className="bg-blue-700 rounded-full text-white px-8 py-2">
            Buat Pesanan
          </Link>
        </div>
      )}
    </section>
  );
}

export default Order;
