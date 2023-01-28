/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
export const resizeWatcher = (reference: any, onChangeDimension: Function): void => {

    function checkResize(mutations: any) {

        // reference.addEventListener('resize', (event: any) => onChangeDimension?.(event.detail))
        // const el = mutations[0].target
        // const width = el.clientWidth
        // const height = el.clientHeight

        // const isChange = mutations
        //     .map((m: any) => `${m.oldValue}`)
        //     .some((prev: any) => prev.indexOf(`width: ${width}px`) === -1 || prev.indexOf(`height: ${height}px`) === -1)

        // if (!isChange) {
        //     return
        // }
        // const event = new CustomEvent('resize', { detail: { width: width, height: height } })
        // el.dispatchEvent(event)
    }
    const observer = new MutationObserver(checkResize)
    observer.observe(reference, { attributes: true, attributeOldValue: true, attributeFilter: ['style'] })
}
