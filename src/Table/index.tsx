'use client'

import clsx from 'clsx'
import type React from 'react'
import { createContext, useContext, useState } from 'react'
import Link from '../Link'

const TableContext = createContext<{ bleed: boolean; dense: boolean; grid: boolean; striped: boolean }>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
})

export function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  children,
  ...props
}: { bleed?: boolean; dense?: boolean; grid?: boolean; striped?: boolean } & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <TableContext.Provider value={{ bleed, dense, grid, striped } as React.ContextType<typeof TableContext>}>
      <div className="table__wrapper">
        <div
          {...props}
          className={clsx(
            'table__container',
            className
          )}
        >
          <div
            className={clsx(
              'table__inner',
              bleed && 'table__inner--bleed'
            )}
          >
            <table
              className={clsx(
                'table__element',
                bleed && 'table--bleed',
                dense && 'table--dense',
                grid && 'table--grid',
                striped && 'table--striped'
              )}
            >
              {children}
            </table>
          </div>
        </div>
      </div>
    </TableContext.Provider>
  )
}

export function TableHead({ className, ...props }: React.ComponentPropsWithoutRef<'thead'>) {
  return <thead {...props} className={clsx('table__head', className)} />
}

export function TableBody({ className, ...props }: React.ComponentPropsWithoutRef<'tbody'>) {
  return <tbody {...props} className={clsx('table__body', className)} />
}

const TableRowContext = createContext<{ href?: string; external?: boolean; title?: string }>({
  href: undefined,
  external: false,
  title: undefined,
})

export function TableRow({
  href,
  external,
  title,
  className,
  ...props
}: { href?: string; external?: boolean; title?: string } & React.ComponentPropsWithoutRef<'tr'>) {
  return (
    <TableRowContext.Provider value={{ href, external, title } as React.ContextType<typeof TableRowContext>}>
      <tr
        {...props}
        className={clsx(
          'table__row',
          href && 'table__row--clickable',
          className
        )}
      />
    </TableRowContext.Provider>
  )
}

export function TableHeader({ className, ...props }: React.ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      {...props}
      className={clsx('table__header', className)}
    />
  )
}

export function TableCell({ className, children, ...props }: React.ComponentPropsWithoutRef<'td'>) {
  let { href, external, title } = useContext(TableRowContext)
  let [cellRef, setCellRef] = useState<HTMLElement | null>(null)

  return (
    <td
      ref={href ? setCellRef : undefined}
      {...props}
      className={clsx('table__cell', className)}
    >
      {href && (
        <Link
          data-row-link
          href={href}
          external={external}
          aria-label={title}
          // className="table__row-link"
        />
      )}
      {children}
    </td>
  )
}
