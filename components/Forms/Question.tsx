"use client";
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { questionSchema } from "@/lib/validations";
import * as z from "zod";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";

export function ProfileForm() {
	// 1. Define your form.
}

// Ham apne form ko scalable bana rahe hai
// hampe 2 type k forms honge
// 1) Edit k liye - type - edit , Button [ Edit a Question ] , Server ko call alag alag jayegi
// 2) Create k liye - type - create , Button alag hoga [Ask a Question] Type , isme bhi server call alag jayegi
const type: string = "create"; // | 'edit'
const Question = () => {
	const editorRef = useRef(null);
	const [isSubmitting, setisSubmitting] = useState(false);
	const form = useForm<z.infer<typeof questionSchema>>({
		resolver: zodResolver(questionSchema),
		defaultValues: {
			title: "",
			explanation: "",
			tags: [],
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof questionSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		setisSubmitting(true);

		try {
			// Get all the values from the form
			// make an async call to your  API - Create a Question | Edit a Question
			// Direct to the Home Page if SuccessFull
			await createQuestion({});
		} catch (error) {
		} finally {
			setisSubmitting(false);
		}
		console.log(values);
	}

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		field: any
	) => {
		if (e.key === "Enter" && field.name === "tags") {
			e.preventDefault();
			const tagInput = e.target as HTMLInputElement;
			const tagValue = tagInput.value.trim();

			if (tagValue !== "") {
				if (tagValue.length > 15) {
					return form.setError("tags", {
						type: "required",
						message: "Tag must be less than 15 characters",
					});
				}

				if (!field.value.includes(tagValue as never)) {
					form.setValue("tags", [...field.value, tagValue]);
					tagInput.value = "";
					form.clearErrors("tags");
				} else {
					form.trigger();
				}
			}
		}
	};

	const handleTagRemove = (tag: any, field: any) => {
		const newTags = field.value.filter((t: string) => t != tag);
		form.setValue("tags", newTags);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem className="flex w-full flex-col">
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Question Title<span className="text-primary-500">*</span>
							</FormLabel>
							<FormControl className="mt-3.5">
								<Input
									className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
									{...field}
								/>
							</FormControl>
							<FormDescription className="body-regular mt-2.5 text-light-500">
								Be specific and imagine you&apos;re asking a question to another
								person
							</FormDescription>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="explanation"
					render={({ field }) => (
						<FormItem className="flex w-full flex-col">
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Detailed explanation of your problem
								<span className="text-primary-500">*</span>
							</FormLabel>
							<FormControl className="mt-3.5">
								<Editor
									apiKey={process.env.NEXT_PUBLIC_TINY_DOC_KEY}
									onInit={(evt, editor) => {
										// @ts-ignore
										editorRef.current = editor;
									}}
									onBlur={field.onBlur}
									onEditorChange={(content) => field.onChange(content)}
									initialValue=""
									init={{
										height: 350,
										menubar: false,
										plugins: [
											"advlist",
											"autolink",
											"lists",
											"link",
											"image",
											"charmap",
											"preview",
											"anchor",
											"searchreplace",
											"visualblocks",
											"codesample",
											"fullscreen",
											"insertdatetime",
											"media",
											"table",
											"wordcount",
										],
										toolbar:
											"undo redo | " +
											"codesample | bold italic forecolor | alignleft aligncenter |" +
											"alignright alignjustify | bullist numlist outdent indent",
										content_style: "body { font-family:Inter; font-size:16px }",
									}}
								/>
							</FormControl>
							<FormDescription className="body-regular mt-2.5 text-light-500">
								Introduces the problem and expand on what you put in the title.
								Minimum 20 characters.
							</FormDescription>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="tags"
					render={({ field }) => (
						<FormItem className="flex w-full flex-col">
							<FormLabel className="paragraph-semibold text-dark400_light800">
								Tags <span className="text-primary-500">*</span>
							</FormLabel>
							<FormControl className="mt-3.5">
								<>
									<Input
										// disabled={(type = "Edit")}
										className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
										onKeyDown={(e) => {
											// Name of the field we clicked
											handleKeyDown(e, field);
										}}
										placeholder="Add tags..."
									/>
									{field.value.length > 0 && (
										<div className="flex-start mt-3.5">
											{field.value.map((tag: any) => (
												<Badge
													className="flex-center gap-2 px-4 py-2 capitalize background-light800_dark400 text-light400_light500 rounded-md subtle-medium"
													onClick={() => {
														handleTagRemove(tag, field);
													}}
												>
													{tag}
													<Image
														src="/assets/icons/close.svg"
														alt="close icon"
														width={12}
														height={12}
														className="cursor-pointer object-contain invert-0 dark:invert"
													/>
												</Badge>
											))}
										</div>
									)}
								</>
							</FormControl>
							<FormDescription className="body-regular mt-2.5 text-light-500">
								Add up to 3 tags to describe what your question is about. You
								need to press enter to add a tag.
							</FormDescription>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="primary-gradient !text-white-900 w-fit"
				>
					{type === "edit" ? (
						<>
							{/* isme baad mai hum icon wagara daal sakte hai */}
							{isSubmitting ? "Editing..." : "Edit a Question"}
						</>
					) : (
						<>{isSubmitting ? "Posting..." : "Ask a Question"}</>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default Question;
