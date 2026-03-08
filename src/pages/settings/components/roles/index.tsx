import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Mail, Plus } from "lucide-react";
import React from "react";
import { roles } from "../../data";
import { ReactComponent as Users } from "@/icons/menu/users.svg";
import { Button } from "@/components/ui/button";

const Role = () => {
  return (
    <section className="space-y-5">
      <RolesHeader />
      <Separator />
      <ConnectedEmail />
      <Separator />
      <ActiveRole />
      <Separator />
    </section>
  );
};

const RolesHeader = () => {
  return (
    <section>
      <h2 className="text-xl text-gray-900 font-medium">User Roles</h2>
      <p className="text-sm text-gray-500">
        Update your roles details and information.
      </p>
    </section>
  );
};

const ConnectedEmail = () => {
  const [selectedEmail, setSelectedEmail] =
    React.useState<string>("my-account-email");

  return (
    <section className="grid md:grid-cols-7">
      <div className="md:col-span-1 text-sm">
        <h2 className="text-gray-700 font-medium">Connected email</h2>
        <p className="text-gray-500">Select role account</p>
      </div>
      <div className="md:col-span-6">
        <RadioGroup
          className="gap-6"
          defaultValue="my-account-email"
          value={selectedEmail}
          onValueChange={setSelectedEmail}
        >
          <div className="flex items-start gap-3">
            <RadioGroupItem value="my-account-email" id="my-account-email" />
            <Label
              className="flex flex-col gap-1.5 mt-[1.5px]"
              htmlFor="my-account-email"
            >
              <span className="text-gray-700 font-medium">
                My account email
              </span>
              <span className="text-gray-500">olivia@untitledui.com</span>
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="alternative-email" id="alternative-email" />
            <Label className="text-gray-700" htmlFor="alternative-email">
              An alternative email
            </Label>
          </div>
        </RadioGroup>
        {selectedEmail === "alternative-email" ? (
          <div className="pt-3 pl-6">
            <Input
              type="email"
              startAdornment={<Mail className="size-5 stroke-gray-500" />}
              size="md"
              className="border-gray-300 w-3/5"
              defaultValue="billing@untitledui.com"
              placeholder="enter email"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

const ActiveRole = () => {
  const [activeRole, setActiveRole] = React.useState<string>("Superadmin");
  return (
    <section className="grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-2 text-sm">
        <h2 className="text-gray-700 font-medium">Active Role</h2>
        <p className="text-gray-500">
          Select active role available to the user.
        </p>
      </div>
      <div className="md:col-span-6">
        <RadioGroup
          defaultValue="my-account-email"
          value={activeRole}
          onValueChange={setActiveRole}
          className="space-y-2.5"
        >
          {roles.map((role) => (
            <FieldLabel key={role.id} htmlFor={role.name}>
              <Field orientation="horizontal">
                <FieldContent className="flex-row gap-3">
                  <span className="border border-gray-100 w-fit h-fit px-3 py-1 rounded-md">
                    <Users className="size-6 stroke-gray-500" />
                  </span>
                  <div>
                    <FieldTitle>{role.name}</FieldTitle>
                    <FieldDescription>
                      Last active: {role.last_active}
                    </FieldDescription>
                    <div className="space-x-4 pt-2.5">
                      <button>Set as default</button>
                      <button className="text-primary-700">Edit</button>
                    </div>
                  </div>
                </FieldContent>
                <RadioGroupItem value={role.name} id={role.name} />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
        <Button
          className="px-0 no-underline [&_svg]:stroke-gray-500 font-medium text-gray-500"
          variant="link"
        >
          <Plus /> Add role to user
        </Button>
      </div>
    </section>
  );
};

export default Role;
