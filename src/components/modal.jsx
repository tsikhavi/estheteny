import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="bg-gray-600 hover:bg-gray-500 text-gray-100">
        Get in Touch
      </Button>
      <Dialog open={open} handler={handleOpen} className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-transparent p-4 rounded-lg shadow-md max-w-md w-full">
          <DialogHeader>It&apos;s a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this way, it took me twenty-five years to get
            these plants, twenty-five years of blood, sweat, and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter className="flex justify-end pt-2">
            <Button onClick={handleOpen} className="mr-1 bg-red-500 hover:bg-gray-100 text-white hover:text-red-500">
              <span>Cancel</span>
            </Button>
            <Button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}
