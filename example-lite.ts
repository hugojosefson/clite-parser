#!/usr/bin/env -S deno run -A
import { cliteRun } from "https://deno.land/x/clite_parser@0.1.2/clite_parser.ts";

class Tool {
  retry = 2;
  webUrl = "none";
  no_color?: boolean;

  main() {
    console.log("main", this);
  }

  up() {
    console.log("up command", this);
  }

  down(force: boolean, timeout: number) {
    console.log("down command", { force, timeout }, this);
  }
}

cliteRun(new Tool());
