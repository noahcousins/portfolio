//@ts-nocheck

'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button, buttonVariants } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { Phone, Mail, Copy } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { addSend } from '@/utils/supabase/api/legacy/api'; // Replace "your-file" with the actual path to the file containing addSend

export default function TemplateForm({
  templates,
  session,
  politician,
  isOpen
}: {
  templates: any;
  session: any;
  politician: any;
  isOpen: boolean;
}) {
  const [showCallScript, setShowCallScript] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(
    templates.templatesData[0]
  );

  const { toast } = useToast();

  const handleTemplateChange = (value: string) => {
    const newSelectedTemplate = templates.templatesData.find(
      (template: { id: any }) => template.id === value
    );
    setSelectedTemplate(newSelectedTemplate);
  };

  const toggleContent = showCallScript
    ? selectedTemplate?.call_script
    : selectedTemplate?.letter;

  const formattedContent = toggleContent
    ? toggleContent.replace(/\n/g, '<br />')
    : '';

  const handleSubmit = async () => {
    try {
      const result = await addSend(
        selectedTemplate.id, // Use the ID of the selected template
        session,
        politician,
        toast
      );

      if (result) {
        // Send added successfully, you can handle the success case here
        console.log('Send added successfully.');
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        duration: 5000 // Optional: Specify the duration for the toast
      });
      // Handle the error case and display the error message in a toast
      if (error.message) {
        const errorMessage = error.message;
      } else {
        // If specific details aren't available, display a generic error message
        toast({
          title: 'Error',
          description: 'Failed to add send. Please try again later.',
          duration: 5000 // Optional: Specify the duration for the toast
        });
      }
    }
  };

  console.log(templates, 'dododo');

  const handleCopyClick = () => {
    const el = document.createElement('textarea');
    el.value = selectedTemplate?.letter;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // Optionally, you can set a state or display a message to indicate the content was copied
  };

  const parentVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.2 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex w-fit flex-col gap-8"
          variants={parentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="flex items-center gap-2"
            variants={childVariants}
          >
            <Link
              href={`tel:${politician.phone_number}`}
              className={buttonVariants({ variant: 'secondary' })}
            >
              <div className="group flex items-center gap-2">
                <Phone
                  className="rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-12"
                  size={16}
                />
                <p className="text-xs uppercase">{politician.phone_number}</p>
              </div>
            </Link>
            <a
              href={politician.officialWebsite}
              target="_blank"
              className={buttonVariants({ variant: 'secondary' })}
              rel="noreferrer"
            >
              <div className="group flex items-center gap-2">
                <Mail
                  className="scale-100 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  size={16}
                />
                <p>Email</p>
              </div>
            </a>
          </motion.div>
          <motion.div className="select-wrapper" variants={childVariants}>
            <Select onValueChange={handleTemplateChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={templates.templatesData[1].issue} />
              </SelectTrigger>
              <SelectContent>
                {templates.templatesData.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.issue}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div className="switch-wrapper" variants={childVariants}>
            <div className="flex w-full items-center justify-between">
              <div className="flex h-[40px] items-center gap-2">
                <Switch
                  defaultChecked={showCallScript}
                  checked={showCallScript}
                  onCheckedChange={setShowCallScript}
                />
                <Label htmlFor="call-script">
                  {showCallScript ? (
                    <p className="font-normal">Call</p>
                  ) : (
                    <p className="font-normal">Email</p>
                  )}
                </Label>
              </div>
              {!showCallScript && (
                <Button onClick={handleSubmit} variant="default">
                  One-click send with UAPoli
                </Button>
              )}
            </div>
          </motion.div>
          {toggleContent && (
            <motion.div className="content-wrapper" variants={childVariants}>
              <div className="flex w-full items-center justify-between">
                <h2 className="text-base">
                  {showCallScript ? 'Call Script' : 'Letter Template'}
                </h2>
              </div>
              <div className="relative flex max-w-2xl rounded-2xl border-[1px] border-primary/25 bg-primary/10 p-4">
                {!showCallScript && (
                  <div
                    onClick={handleCopyClick}
                    className="absolute right-4 rounded-md bg-primary/20 p-2 hover:bg-primary/40 focus:outline-none focus:ring focus:ring-violet-300 active:bg-primary/60"
                  >
                    <Copy size={16} />
                  </div>
                )}
                <div
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: formattedContent }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
