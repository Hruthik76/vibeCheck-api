### The Project: "VibeCheck" - A Social Mood & Music Sharing API

---

### Assignment 1: The Public Feed (Easy)

**Goal:** Create the basic "read-only" version of our API. We will set up the Express server and create endpoints to list services, but without a real database for now.

**(Steps from the previous response remain the same)**

**Deliverables & Verification**

1. **Project Structure:**
    - You have a project folder named `vibecheck-api`.
    - Inside, you have `package.json` and `server.js`.
2. **Server is Running:**
    - Running `node server.js` in your terminal starts the server without errors and logs a message like `🚀 Server blasting off on port 5000`.
    - ![image](https://github.com/user-attachments/assets/085b5c1a-d3b3-4e9e-81c8-a99df5e69647)

3. **Root Endpoint:**
    - Making a `GET` request to `http://localhost:5000/` returns a `200 OK` status and an HTML/text welcome message.
    - ![image](https://github.com/user-attachments/assets/8b5dc7f3-30a0-4c8c-9f0e-b2f6c7bbea7b)

4. **Get All Vibes Endpoint:**
    - Making a `GET` request to `http://localhost:5000/api/v1/vibes` returns:
        - A status code of `200 OK`.
        - A `Content-Type` header of `application/json`.
        - A JSON body that is an array containing all three of your `sampleVibes` objects.
        - ![image](https://github.com/user-attachments/assets/290a0a17-bd2a-44bd-adec-15c2384131bc)

5. **Get Single Vibe Endpoint (Success Case):**
    - Making a `GET` request to `http://localhost:5000/api/v1/vibes/2` returns:
        - A status code of `200 OK`.
        - A JSON body containing only the single vibe object with `id: 2`.
        - ![image](https://github.com/user-attachments/assets/80ad405e-df70-45e4-b05e-085f8574ee2b)

6. **Get Single Vibe Endpoint (Failure Case):**
    - Making a `GET` request to `http://localhost:5000/api/v1/vibes/99` (or any ID that doesn't exist) returns:
        - A status code of `404 Not Found`.
        - A JSON body with an error message, e.g., `{ "success": false, "message": "That vibe is off the grid, not found." }`.
        - ![image](https://github.com/user-attachments/assets/5bf92149-4a21-4c43-87be-9f5995f3640c)
