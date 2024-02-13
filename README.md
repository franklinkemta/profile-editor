# Profile Editor 📄🍻

## Description
The **Profile Editor** is a powerful tool designed to assist users in creating customized CV profiles for specific job applications. Whether you're targeting a particular company or role, this tool streamlines the process by leveraging a language model (LLM) to enhance various aspects of your professional profile.

### Key Features
1. **CV Enhancement**: Input your existing CV profile, and the tool will analyze it to provide suggestions for improvement. It ensures that your qualifications, skills, and experience are effectively highlighted.

2. **Cover Letter Enhancement**: When you input a job description, the tool generates a revised cover letter tailored to the specific role you're applying for. It considers language requirements, company culture, and your qualifications, resulting in a personalized and effective cover letter.

3. **Profile Portfolio (Projects)**: Showcase your professional projects, certifications, and achievements. The tool helps organize and present them in an appealing format.

4. **Personal Blog**: Share your insights, experiences, and industry knowledge through a dedicated blog section. Write articles related to your field and engage with your audience.

5. **Contact Information**: Easily include your contact details, such as email address or LinkedIn profile, in your CV or cover letter.

### Installation Instructions
To get started with the **Profile Editor**, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/franklinkemta/profile-editor.git
   ```

2. Navigate to the project directory:
   ```
   cd profile-editor
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Access the tool in your browser at `http://localhost:3000`.

### Contributing
We welcome contributions from the developer community! If you'd like to personalize the project, suggest changes, or add new features, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your modifications.
4. Submit a pull request.

Let's collaborate and make the **Profile Editor** even better! 🚀

### Important Notes
- **Fun Experiment**: This project serves as a playful exploration of LLM capabilities, starting with prompt engineering and visual reasoning later.
- **Not a Shortcut**: Remember that while the tool can help, it doesn't replace the thoughtful process of crafting employer-specific job applications. Understand the role requirements, company culture, and how well you align with the position you're applying for.

### Usage
1. Copy the job description.
2. Gather details about the target company.
3. Input your existing CV profile (if not already done).

## Work in Progress (WIP)
- Fix the foreground white text color issue on dark themes.

## TODO List
1. Build the Profile Generator (Input Form):
   - Collect user profile, experience, and expectations.
   - Input the job description²[2].
   - Provide details about the target company.
2. Structure prompts using ChatGPT for profile, job, and company matching.
3. Add overlay edit actions on resume an cover letter to allow user to edit each section of its CV or the cover letter and print it after.
4. Ensure accurate processing of draft documents by the GPT API.
5. Dynamically integrate GPT responses into the frontend template.
6. Generate shareable, unique CV profile-job links while retaining pre-prompting context.
7. Add features for precise CVs and cover letters based on specific job descriptions.
8. Enable interaction/chat with the generated CV profile.
9. Migrate static images to a CDN and use their url instead
10. Make hard coded informations dynamic and stored in local session 

## License
This project is licensed under the Apache License, Version 2.0. You can find the full text of the license in the LICENSE file.