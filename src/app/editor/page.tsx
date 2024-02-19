"use client"

import { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { Input, Textarea, Button, Divider, NextUIProvider, Modal, ModalContent, ModalFooter, ModalBody, ModalHeader, useDisclosure } from "@nextui-org/react";

import Header from '@/components/Header';

import { ProfileData, generateCoverLetterPrompt, testPrompt } from "@/utils/promptGenerator";
import { ClipboardDocumentListIcon, DocumentDuplicateIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function Editor() {
  const [formData, setFormData] = useState<ProfileData>({
    fullName: '',
    jobTitle: '',
    originalCoverLetter: '',
    jobDescription: '',
    cvSections: '',
  });

  const [apiKey, setApiKey] = useState<string>("");

  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPrompt(generateCoverLetterPrompt(formData));

    try {
      if (!prompt) {
        setResult("Error, missing or empty prompt");
      }
      const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 50, // Adjust as needed
        }),
      });

      const data = await response.json();
      console.log("response", data);
      if (data.error) {
        setResult(data.error.message);
      } else {
        // const revisedCoverLetter = data.choices[0].text;
        setResult('Not implemented success response')
      }

    } catch (error) {
      console.error('Error making API request:', error);
      setResult(`Error: ${error}`);
    }
    onOpen();
  }, [apiKey, formData, onOpen, prompt]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value)
  };

  const handleCopyPromt = () => {
    navigator.clipboard.writeText(prompt)
      .then(() => {
        console.log('Prompt copied to clipboard');
      })
      .catch(err => {
        console.error('Unable to copy prompt', err);
      });
  };

  return (
    <NextUIProvider>
      <main className="layout">
        <div className="page">
          <Header title="Create Cover Letter ✨✨" />
          <Divider />
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 justify-center py-3 text-sm pt-7">
            <label className="">
              Job Title:
              <Input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="ex: Développeur Backend - Python"
                required
                variant="underlined"
                color="primary"
              />
            </label>
            <label className="">
              Job Description:
              <Textarea
                minRows={2}
                type="text"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Job description here, including company description (if present)"
                required
                variant="underlined"
                color="primary"
              />
            </label>
            <label className="">
              Full Name:
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full"
                placeholder="ex: Franklin Kemta"
                required
                variant="underlined"
                color="primary"
              />
            </label>
            <label className="">
              Resume / CV (Relevant Sections):
              <Textarea
                minRows={2}
                type="text"
                name="cvSections"
                value={formData.cvSections}
                onChange={handleInputChange}
                className="w-full"
                placeholder="CV / resume's relevants sections here, incude any additional details if relevant"
                required
                variant="underlined"
                color="primary"
              />
            </label>
            <label className="">
              Original Open Letter (Optional):
              <Textarea
                minRows={2}
                type="text"
                name="originalCoverLetter"
                value={formData.originalCoverLetter}
                onChange={handleInputChange}
                className="w-full"
                placeholder="Cover letter that will be enhanced / if this field is empty, a new cover letter will be suggested"
                variant="underlined"
                color="primary"
              />
            </label>

            <div className="flex flex-col">
              <label className="">
                YOUR OPENAI API KEY
                <Input
                  type="password"
                  name="apiKey"
                  value={apiKey}
                  onChange={handleApiKeyChange}
                  className="w-full"
                  placeholder="Please always use a temporary API key"
                  description="By using this feature, I consent to the processing of the provided information"
                  required
                  variant="underlined"
                  color="primary"
                />
              </label>
            </div>
            <Button
              className="ml-auto"
              radius="full"
              variant="solid" color="primary"
              type="submit"
              startContent={<RocketLaunchIcon className="h-5 w-5" />}
              endContent={<span className="text-2xl"> ✨ </span>}
            >
              Enhance </Button>
          </form>
          <Divider />
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
            size="2xl"
            isDismissable={false}
            className="min-h-[95%]"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-row gap-1 font-normal">
                    <RocketLaunchIcon className="h-5 w-5" /> Enhanced cover letter
                  </ModalHeader>
                  <ModalBody className="p-2">
                    <p className="min-h-80 bg-gray-100"> {result} </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="default" radius="none" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="secondary" radius="none" variant="light" onPress={handleCopyPromt}
                      startContent={<ClipboardDocumentListIcon className="h-5 w-5" />}
                    >
                      Prompt
                    </Button>
                    <Button color="primary" radius="none" variant="light" onPress={onClose}
                      startContent={<DocumentDuplicateIcon className="h-5 w-5" />}
                    >
                      Copy cover letter
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </main>
    </NextUIProvider>
  );
}
