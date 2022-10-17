import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const score = [
  { name: '1 - Initial' },
  { name: '2 - Managed' },
  { name: '3 - Defined' },
  { name: '4 - Quantitatively Managed' },
  { name: '5 - Optimizing' },
]

export default function Example() {
  const [selected, setSelected] = useState(score[0])

  return (
    <div className="listbox-wrapper">
      <Listbox value={selected} onChange={setSelected}>
        <div className="p-relative">
          <Listbox.Button className="listbox-btn">
            <span className="d-block truncate">{selected.name}</span>
            <span className="listbox-btn-icon">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="listbox">
              {score.map((score, scoreIdx) => (
                <Listbox.Option
                  key={scoreIdx}
                  className={({ active }) =>
                    `listbox-item ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={score}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {score.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}