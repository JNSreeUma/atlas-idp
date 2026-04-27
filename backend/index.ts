import simpleGit from 'simple-git';
import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const git = simpleGit();

app.use(cors());
app.use(express.json());

// app.post('/create-project', async (req: Request, res: Response) => {
//   const { repoName } = req.body;

//   try {
//     // 1. Create GitHub repo (already working)
//     const response = await axios.post(
//       'https://api.github.com/user/repos',
//       { name: repoName, private: false },
//       {
//         headers: {
//           Authorization: `token ${process.env.GITHUB_TOKEN}`
//         }
//       }
//     );

//    const repoUrl = response.data.clone_url.replace(
//   'https://',
//   `https://${process.env.GITHUB_TOKEN}@`
// );

//     // 2. Clone repo locally
//     const projectPath = path.join(__dirname, `../temp/${repoName}`);
//     const git = simpleGit();

//     await git.clone(repoUrl, projectPath);

//     // 3. Copy template files
//     const templatePath = path.join(__dirname, `../templates/node-app`);

//     fs.cpSync(templatePath, projectPath, { recursive: true });

//     // 4. Push to GitHub
//     const repoGit = simpleGit(projectPath);

//     await repoGit.add('.');
//     await repoGit.commit('Initial commit from Atlas 🚀');
//     await repoGit.push('origin', 'main');

//     res.json({
//       message: "Repo created + code pushed 🚀",
//       repoUrl
//     });

//   } catch (error: any) {
//     console.error(error);

//     res.status(500).json({
//       message: "Failed to create project"
//     });
//   }
// });
app.post('/create-project', async (req: Request, res: Response) => {
  const { repoName } = req.body;

  try {
    // 1. Create GitHub repo
    const response = await axios.post(
      'https://api.github.com/user/repos',
      {
        name: repoName,
        private: false
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    const repoUrl = response.data.clone_url;

    // 2. Define local project path
    const projectPath = path.join(__dirname, `../temp/${repoName}`);
    const templatePath = path.join(__dirname, `../templates/node-app`);
   

    //clean if already exists
    if (fs.existsSync(projectPath)){
      fs.rmSync(projectPath, { recursive: true, force: true});
    }
 fs.cpSync(templatePath, projectPath, { recursive: true });
    // 3. Clone template repo
    // await git.clone(repoUrl, projectPath);
     const repoGit = simpleGit(projectPath);
     
     await repoGit.init();
     await repoGit.addRemote('origin', repoUrl);
    // await simpleGit().clone(
    //   "https://github.com/jnsreeuma/templates-node-app.git",
    //   projectPath
    // );
    // 4. Copy template files
    

    // 5. Push to GitHub
    // const repoGit = simpleGit(projectPath);

    await repoGit.add(".");
    await repoGit.commit("Initial commit from Atlas IDP 🚀");
    await repoGit.push("origin", "main");

    res.json({
      success: true,
      message: "Project created & deployed 🚀",
      repo: response.data.html_url,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something failed ❌" });
  }
});

app.listen(5000,  "0.0.0.0",() => {
  console.log("Server running on port 5000");
});