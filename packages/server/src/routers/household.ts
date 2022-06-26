import { createRouter } from "../utils/createRouter";

import HouseholdResolver from "../resolvers/household.resolver";

import { UpdateHouseholdInput } from "../schema/household.schema";
import { z } from "zod";

const households = createRouter();

export default households;
