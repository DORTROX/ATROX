"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ThemeSwitcher from "@/components/BuiltComponents/ThemeSwitcher";
import { signIn, signOut } from "next-auth/react";
import { useAuth } from "../Contexts/AuthContext";
interface User {
  Name: string;
  Image: string;
  Token: string;
}

export function Navbar() {
  return (
    <div className='flex p-2 justify-between items-center'>
      <div className='hidden md:flex w-1/2 justify-between gap-1'>
        <div>
          <ProfileSelector />
        </div>
        <GettingStartedMenuDesktop />
        <SearchBar />
      </div>
      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"bottom"} className='h-4/5'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className='grid gap-2'>
                <SearchBar />
                <ProfileSelector />
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>Getting Started</AccordionTrigger>
                    <AccordionContent className=''>
                      <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] overflow-y-scroll h-64'>
                        <li className='row-span-3'>
                          <a
                            className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                            href='/'>
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <Image className='bg-black p-2 rounded-full m-auto' src={"/AtroxLogo.png"} alt='Atrox Logo' width={100} height={100} />
                            <div className='mb-2 mt-4 text-lg font-medium'>ATROX</div>
                            <p className='text-sm leading-tight text-muted-foreground'>Tech Community by Kaizen Dev</p>
                          </a>
                        </li>
                        <ListItem2 href='/AboutMe' title='Who am I?'>
                          Curious to know about me? Well dont be disappointed.
                        </ListItem2>
                        <ListItem2 href='/docs/installation' title='Mechanism'>
                          We have our Tools you can use to make your life easier.
                        </ListItem2>
                        <ListItem2 href='/AboutMe#org' title='Who are we?'>
                          Maybe jewish or maybe not. Who knows?
                        </ListItem2>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {/* <GettingStartedMenuDesktop /> */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className='flex gap-5'>
        <ThemeSwitcher />
        <ProfileSetting />
      </div>
    </div>
  );
}

function SearchBar() {
  return <Input type='text' placeholder='Search' />;
}

function ProfileSetting() {
  const { user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.Image || "https://github.com/shadcn.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        {user ? (
          <>
            <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                signIn("google");
              }}>
              Add Account
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={() => signIn("google")}>
            Log In
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function GettingStartedMenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'>
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <Image className='bg-black p-2 rounded-full' src={"/AtroxLogo.png"} alt='Atrox Logo' width={100} height={100} />
                    <div className='mb-2 mt-4 text-lg font-medium'>ATROX</div>
                    <p className='text-sm leading-tight text-muted-foreground'>Tech Community by Kaizen Dev</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href='/AboutMe' title='Who am I?'>
                Curious to know about me? Well dont be disappointed.
              </ListItem>
              <ListItem href='/docs/installation' title='Mechanism'>
                We have our Tools you can use to make your life easier.
              </ListItem>
              <ListItem href='/AboutMe#org' title='Who are we?'>
                Maybe jewish or maybe not. Who knows?
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ProfileSelector() {
  const [open, setOpen] = React.useState(false);
  const { Users, user } = useAuth();
  const [value, setValue] = React.useState<string | undefined>();
  React.useEffect(() => {
    if (!user && !Users) return;
    const defaultUser = Users.find((u) => u.Name === user?.Name) ? user?.Name : Users[0]?.Name;
    setValue(defaultUser);
  }, [Users, user]);

  async function switchDispacth(token: string) {
    await fetch("api/SwitchAccount", {
      body: JSON.stringify({ token }),
      method: "POST",
    }).then(async (res) => {
      const x = await res.json();
      if (x === "OK") {
        window.location.reload();
      }
    });
  }
  async function Switch(Name: string) {
    setValue(Name);
    setOpen(false);
    const UsersString = localStorage.getItem("Users");
    const UsersArray: User[] = UsersString ? JSON.parse(UsersString) : [];
    UsersArray.map((user) => {
      if (user.Name === Name) {
        switchDispacth(user.Token)
      }
    });
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='w-[200px] justify-between'>
          {value ? value : user?.Name}
          <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search Account' className='h-9' />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {Users.map((user) => (
              <CommandItem
                key={user.Name}
                onSelect={() => {
                  Switch(user.Name);
                }}>
                {user.Name}
                <CheckIcon className={cn("ml-auto h-4 w-4", value === user.Name ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))}
            {/* {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                {framework.label}
                <CheckIcon className={cn("ml-auto h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
              </CommandItem>
            ))} */}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const ListItem2 = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
        </a>
      </li>
    );
  }
);

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}>
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
ListItem2.displayName = "ListItem2";
