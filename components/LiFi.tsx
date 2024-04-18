/* eslint-disable import/no-default-export */
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Modal, Input, notification, Button, Steps, ConfigProvider, message } from "antd"

export const LiFiWidgetNext = dynamic(
  () => import('./LiFiWidget').then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <div>loading.....</div>,
  },
);

interface LiFiProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
export default function LiFi({open,setOpen}:LiFiProps)  {
  const handleCancel = () => {
    setOpen(false)
}
  return (<div>
    <Modal  title="LIFI Exchange" open={open} onCancel={handleCancel} footer="">
      <LiFiWidgetNext />
    </Modal>
    </div>)
};