import { createRouter } from "../utils/createRouter";

import UserResolver from "../resolvers/user.resolver";

const users = createRouter()
  /**
   * @openapi
   * /trpc/users.current:
   *  get:
   *     tags:
   *     - User
   *     description: Returns the currently logged in user
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/CreateUserResponse'
   *       401:
   *         description: Unauthorized
   */
  .query("current", {
    resolve({ ctx }) {
      return UserResolver.getCurrentUser(ctx);
    },
  })
  /**
   * @openapi
   * /trpc/users.current.household:
   *  get:
   *     tags:
   *     - User
   *     description: Returns the household of the current user and all members that belong to it. It will create an empty household if the user doesn't have one
   *     responses:
   *       200:
   *         description: Success
   *       401:
   *         description: Unauthorized
   */
  .query("current.household", {


    async resolve({ ctx }) {
      return UserResolver.getCurrentUserHousehold(ctx);
    },
  });

export default users;
