import { Box } from '@mui/material'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? ''

export type MapBoxProps = {
  //
}

export const MapBox: React.FC<MapBoxProps> = () => {
  // 地図表示するDiv要素を特定するためのuseRef
  const mapContainerRef = useRef<HTMLElement | string>(null)

  const [lng, setLng] = useState(134)
  const [lat, setLat] = useState(34.2)
  const [zoom, setZoom] = useState(14)

  useEffect(() => {
    // null の可能性があるので型ガード
    if (!mapContainerRef.current) return
    const map: mapboxgl.Map = new mapboxgl.Map({
      center: [lng, lat],
      container: mapContainerRef.current,
      style: 'mapbox://styles/kiichiro/cl6wqubdd000q16lgsvbw8rp0',
      zoom: zoom,
    })

    return () => map.remove()
  }, [])

  return (
    <Box>
      <Box ref={mapContainerRef} sx={{ height: '800px', m: '16px', mx: 'auto', p: '16px', width: '1200px' }} />
    </Box>
  )
}
