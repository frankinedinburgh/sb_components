import { FC, useEffect, useState } from "react";
import Schedule from "../Schedule";

export const Workstation: FC<IWorkstation> = ({ id, deskNumber }) => {
  const [data, setData] = useState<IData>({
    reserved: false,
    schedule: [],
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  const onReserve = async (slot: any) => {
    if (slot.reserved) return;
    // if !slot.reserved || user has > 2 slots booked || > 5 days to workstation usage return
    const res = await fetch(`${process.env.apiBaseUrl}/api/workstation/${id}`, {
      method: "POST",
      body: JSON.stringify({
        userId: "",
        slotId: slot.id,
      }),
    });
    return res;
  };

  useEffect(() => {
    //fetches its own reserved status and schedule on mounting.
    setLoading(true);
    fetch(`${process.env.apiBaseUrl}/api/workstation/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return !data.reserved ? (
    <>
      <p>id: {id}</p>
      <p>DeskNumber: {deskNumber}</p>
      <Schedule schedule={data.schedule} onReserve={onReserve} />
    </>
  ) : (
    <>unavailable</>
  );
};

interface IWorkstation {
  id: number;
  deskNumber: number;
}

interface IData {
  reserved: boolean;
  schedule: {
    id: number;
    slot: string;
    reserved: boolean;
  }[];
}
