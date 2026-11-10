# Michael Micholn — Student Portfolio & Academic Planner

A responsive, five-page university portfolio created with **semantic HTML5, an external CSS stylesheet, and vanilla JavaScript**. It is ready for static hosting on Netlify or GitHub Pages. No build step or package installation is required.

## Pages

| Page | File | Features |
| --- | --- | --- |
| Home | `index.html` | Name, profile image, welcome, bio, responsive navigation and featured work |
| About me | `about.html` | Background, career aspirations, technical skills, interests and original HTML5 video |
| Projects | `projects.html` | Four project descriptions, visuals and links to public work |
| Academic planner | `planner.html` | Add, complete, delete, filter and persist tasks; progress totals; sample weekly study timetable |
| Contact | `contact.html` | Name, email, phone and message; JavaScript validation and email-compose action |

## Run locally

Open `index.html` in a browser, or serve the folder using:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publish to Netlify (simplest)

1. Put all files in a single GitHub repository, preserving the folder structure.
2. Log in to Netlify and choose **Add new project → Import an existing project**, or drag the entire site folder into Netlify's deploy area.
3. If importing from GitHub, select the repository. Use **no build command** and set **Publish directory** to the repository root (or the folder containing `index.html`).
4. Publish the site and test all five pages and the planner on a mobile device.
5. Submit the *new Netlify URL* and the *new GitHub repository URL* for your assignment. The original `nieportfolio.netlify.app` is a reference, not the new assignment submission.

## Publish to GitHub Pages (alternative)

If these files sit at the repository root, go to **Settings → Pages → Deploy from a branch**, select `main` and `/ (root)`, then save. The site will appear at a URL of the form `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. Relative links are designed for subpaths.

## Personalization checklist (important before submission)

- [ ] **Personal photograph:** the hero and about pages currently show your existing GitHub profile image. The GitHub avatar is **not verified as a photograph**. Replace its `src` in `index.html` and `about.html` with a locally added real student photograph, for example `assets/student-photo.jpg`, to meet the literal assignment requirement. Update the image alt text accordingly.
- [ ] **Name:** pages use `Michael Micholn`, the public name on the supplied GitHub profile. Edit if your university enrollment uses another full name.
- [ ] **Academic background:** the About page uses the computational physics background on your GitHub profile and refers to the MIVA assignment. Add your actual degree, institution, current course and year if appropriate. **No degree/GPA/course schedule is fabricated.**
- [ ] **Phone number:** the contact form requests the visitor's phone; a personal phone contact is not shown because it was not confirmed.
- [ ] **Project images:** the 3D planning image loads the **actual public screenshot** from its GitHub repository when online. Other cards use original **clearly labeled concept illustrations**, not alleged real screenshots. Replace with your own screenshots when available.
- [ ] **Original portfolio repository:** `https://github.com/Micholn/typ_3d` returned a 404 when accessed publicly on November 10, 2026. If private/renamed, replace the link with the correct public repository before submitting.
- [ ] **Contact mechanism:** this is a static site. On successful validation, the visitor's installed email app is opened to compose an email. **No message is transmitted by the website itself.** If direct web submissions are required, integrate a form processing service or backend.

## Existing profile and project sources

The public portfolio and public GitHub information were used for verified details:

- Original 3D portfolio: https://nieportfolio.netlify.app/
- GitHub profile and profile image: https://github.com/Micholn
- 3D planning repository and its screenshot: https://github.com/Micholn/Participatory_planning3D
- Node.js dashboard: https://github.com/Micholn/Controllable_dashboard
- Celo Farcaster mini-app monorepo: https://github.com/celo-org/celo-farcaster-frames
- Originally supplied repository (currently unavailable publicly): https://github.com/Micholn/typ_3d

The original profile avatar and 3D project screenshot are loaded from public GitHub URLs and thus require internet access. Everything else is included locally; when remote images fail, local SVG fallback artwork appears.

## Technology demonstrated

**HTML5:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, forms, input types, buttons, linked images, ordered structure, lists, `table`, `caption`, and `video`.

**CSS3:** external stylesheet, custom properties, responsive breakpoints, Flexbox, Grid, transitions, focus styling, dark/light themes, reduced-motion respect.

**JavaScript:** DOM manipulation, array methods and functions, click/change/submit events, `localStorage`, counters, filtering, task toggles and deletion, form validation using regular expressions, dynamic errors and email composition.

## Notes

Planner content belongs only to the browser in which it was created. It will survive refreshes in a normal browser but does not sync across devices. Three starter tasks are included as examples; you can delete them. The study schedule is deliberately labeled as an example rather than claiming to be your actual timetable.
