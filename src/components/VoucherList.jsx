import React from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiComputerDesktop,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { fetcher } from "../Api/Services";
import VoucherListRow from "./VoucherListRow";
import useSWR from "swr";

const VoucherList = () => {
  const { data, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/vouchers`,
    fetcher
  );
  return (
    <div>
      <div className="flex  justify-between mb-3">
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search voucher..."
          />
        </div>
        <Link
          to={"/sales"}
          className="p-2.5 ms-2 text-sm flex items-center gap-3 font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Sale
          <HiComputerDesktop />
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right whitespace-nowrap"
              >
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && !data ? (
              <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  ">
                <td colSpan={5} className="px-6  text-center py-4 ">
                  There is no Voucher
                </td>
              </tr>
            ) : (
              ""
            )}
            {data?.map((voucher) => (
              <VoucherListRow key={voucher.voucher_id} voucher={voucher} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
