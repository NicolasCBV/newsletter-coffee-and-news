import { Email } from "@app/entitie/email";
import { EmailRepo } from "@app/repositories/email";
import { supaClient } from "@config/supabase";
import { SupabaseEmailMapper } from "@infra/mapper/supabaseEmailMapper";
import { StoragesError } from "../errors/StoragesError";

export class SupaEmailDB implements EmailRepo {
  async create(email: Email) {
    const supaEntitie = SupabaseEmailMapper.toSupabase(email);

    const res = await supaClient.from("Emails").insert(supaEntitie);

    if (res.status !== 201) {
      const errorContent = res.error
        ? res.error
        : {
            details: "No error was found.",
            message: "Could not get CREATED status.",
            hint: "Check if this response should really throw one error, because only status 201 are being accepted, and any error was found.",
          };

      throw new StoragesError({
        name: res.statusText,
        code: res.status,
        details: errorContent.details,
        privateMessage: errorContent.message,
        message: "Could not realize operation.",
        hint: errorContent.hint,
      });
    }
  }
}
