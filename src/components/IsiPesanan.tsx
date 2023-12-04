"use client";

import { Button } from "@/app/components/ui/button";
import { useToast } from "@/app/components/ui/use-toast";
import useGetUser from "@/hooks/useGetUser";
import Image from "next/image";
import { useEffect, useState } from "react";
import FlashScreen from "./FlashScreen";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const PAYMENTS_METHOD = [
  {
    id: 0,
    name: "Dana",
    image: "/Danalogo.png",
  },
  {
    id: 1,
    name: "Gopay",
    image: "/Ovologo.png",
  },
];

function IsiPesanan() {
  const [form, setForm] = useState({
    name: "",
    shoesType: "",
    packageType: "",
    paymentMethodId: -1,
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user, loading: loadingUser, userAuthenticate } = useGetUser();
  const navigate = useRouter();

  const onSubmit = () => {
    if (form.paymentMethodId === -1) {
      toast({
        title: "Metode pembayaran tidak valid!",
        description: "Silahkan pilih metode pembayaran yang tersedia.",
        variant: "destructive",
      });
      return;
    }

    const { paymentMethodId, ...otherData } = form;
    const data = {
      ...otherData,
      paymentMethod: PAYMENTS_METHOD[paymentMethodId].name,
      userId: user!.id,
    };

    setLoading(true);

    fetch("/api/order", {
      body: JSON.stringify(data),
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 201) {
          navigate.push("/order");
          return;
        }

        toast({
          title: res.status,
          description: res.message,
          variant: "destructive",
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    userAuthenticate();
  }, [userAuthenticate]);

  if (loadingUser) return <FlashScreen />;

  return (
    <section className="px-20 mb-10 text-black">
      <div className="w-full flex flex-col items-center justify-center rounded-2xl p-10 pb-20 mt-28">
        <h1 className="text-[40px] font-semibold leading-[100px] tracking-tigh text-center">
          Buat Pesanan
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative z-0 w-full group">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder="Type here..."
                required
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="relative z-0 w-full group">
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Merk Sepatu
              </label>
              <input
                type="text"
                name="shoes_type"
                id="shoes_type"
                className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-4"
                placeholder="Type here..."
                required
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, shoesType: e.target.value }))
                }
              />
            </div>

            <div className="col-span-2">
              <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pilih Paket
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="package_type_standar"
                      type="radio"
                      defaultValue="standar"
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          packageType: e.target.value,
                        }))
                      }
                      required
                    />
                    <label
                      htmlFor="package_type_standar"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Standar Clean
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="package_type_deep"
                      type="radio"
                      defaultValue="deep"
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          packageType: e.target.value,
                        }))
                      }
                      required
                    />
                    <label
                      htmlFor="package_type_deep"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Deep Clean
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pilih Pembayaran
              </h3>
              <div className="flex items-center flex-wrap gap-3">
                {PAYMENTS_METHOD.map((payment) => (
                  <button
                    type="button"
                    key={payment.id}
                    className={`
                      ${
                        payment.id === form.paymentMethodId
                          ? "border border-black"
                          : ""
                      }
                      w-max p-2 bg-gray-200 rounded-md
                    `}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        paymentMethodId: payment.id,
                      }))
                    }
                  >
                    <div className="relative w-[50px] aspect-[3/2] rounded-md overflow-hidden">
                      <Image
                        src={payment.image}
                        alt={payment.name}
                        fill={true}
                        className="object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="w-full bg-blue-500 border-0">
              {loading ? (
                <AiOutlineLoading3Quarters
                  fontSize={24}
                  className="mx-auto animate-spin"
                />
              ) : (
                "Pesan"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default IsiPesanan;
