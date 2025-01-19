import macro from "@lingui-solid/solid/macro"

describe("solid-macro", () => {
  it("Should re-export Macro", () => {
    expect((macro as any).isBabelMacro).toBeTruthy()
  })
})
